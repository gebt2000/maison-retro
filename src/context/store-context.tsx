"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Product } from "@/lib/products";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type StoreState = {
  cart: CartLine[];
  wishlistSlugs: string[];
  cartOpen: boolean;
  searchOpen: boolean;
  addToCart: (product: Product, qty?: number) => void;
  setLineQty: (slug: string, qty: number) => void;
  removeLine: (slug: string) => void;
  toggleWishlist: (slug: string) => void;
  isInWishlist: (slug: string) => boolean;
  setCartOpen: (v: boolean) => void;
  setSearchOpen: (v: boolean) => void;
  cartCount: number;
  cartSubtotal: number;
};

const CART_KEY = "maison-retro-cart";
const WISH_KEY = "maison-retro-wishlist";

const StoreContext = createContext<StoreState | null>(null);

function loadJson<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [wishlistSlugs, setWishlistSlugs] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Hydrate cart/wishlist from localStorage after mount (client-only).
    queueMicrotask(() => {
      setCart(loadJson(CART_KEY, []));
      setWishlistSlugs(loadJson(WISH_KEY, []));
      setHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(WISH_KEY, JSON.stringify(wishlistSlugs));
  }, [wishlistSlugs, hydrated]);

  const addToCart = useCallback((product: Product, qty = 1) => {
    if (!product.inStock) return;
    setCart((prev) => {
      const i = prev.findIndex((l) => l.slug === product.slug);
      if (i === -1) {
        return [
          ...prev,
          {
            slug: product.slug,
            name: product.name,
            price: product.price,
            image: product.images[0] ?? "",
            quantity: qty,
          },
        ];
      }
      const next = [...prev];
      next[i] = {
        ...next[i],
        quantity: next[i].quantity + qty,
      };
      return next;
    });
    setCartOpen(true);
  }, []);

  const setLineQty = useCallback((slug: string, qty: number) => {
    if (qty < 1) {
      setCart((prev) => prev.filter((l) => l.slug !== slug));
      return;
    }
    setCart((prev) =>
      prev.map((l) => (l.slug === slug ? { ...l, quantity: qty } : l)),
    );
  }, []);

  const removeLine = useCallback((slug: string) => {
    setCart((prev) => prev.filter((l) => l.slug !== slug));
  }, []);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlistSlugs((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );
  }, []);

  const isInWishlist = useCallback(
    (slug: string) => wishlistSlugs.includes(slug),
    [wishlistSlugs],
  );

  const cartCount = useMemo(
    () => cart.reduce((n, l) => n + l.quantity, 0),
    [cart],
  );

  const cartSubtotal = useMemo(
    () => cart.reduce((n, l) => n + l.price * l.quantity, 0),
    [cart],
  );

  const value = useMemo(
    () => ({
      cart,
      wishlistSlugs,
      cartOpen,
      searchOpen,
      addToCart,
      setLineQty,
      removeLine,
      toggleWishlist,
      isInWishlist,
      setCartOpen,
      setSearchOpen,
      cartCount,
      cartSubtotal,
    }),
    [
      cart,
      wishlistSlugs,
      cartOpen,
      searchOpen,
      addToCart,
      setLineQty,
      removeLine,
      toggleWishlist,
      isInWishlist,
      cartCount,
      cartSubtotal,
    ],
  );

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}
