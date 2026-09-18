"use client";

import { useEffect } from "react";

const PERIOD_MS = 3600;
const BTN = ".btn-solid, .btn-ghost";

/** Keeps rainbow button glow in phase across hovers instead of restarting at red. */
export function ButtonGlowSync() {
  useEffect(() => {
    let lastPhase = 0;
    let active: HTMLElement | null = null;
    let hoverStart = 0;
    let phaseAtStart = 0;

    const getBtn = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return null;
      return target.closest(BTN) as HTMLElement | null;
    };

    const onEnter = (event: Event) => {
      const btn = getBtn(event.target);
      if (!btn || btn === active) return;
      if (active) {
        const elapsed = performance.now() - hoverStart;
        lastPhase = (phaseAtStart + elapsed) % PERIOD_MS;
      }
      btn.style.setProperty("--glow-phase", `${-lastPhase}ms`);
      active = btn;
      hoverStart = performance.now();
      phaseAtStart = lastPhase;
    };

    const onLeave = (event: Event) => {
      const btn = getBtn(event.target);
      if (!btn || btn !== active) return;
      // Ignore leave when moving to a child inside the same button
      if (
        event instanceof FocusEvent &&
        event.relatedTarget instanceof Node &&
        btn.contains(event.relatedTarget)
      ) {
        return;
      }
      if (
        event instanceof PointerEvent &&
        event.relatedTarget instanceof Node &&
        btn.contains(event.relatedTarget)
      ) {
        return;
      }
      const elapsed = performance.now() - hoverStart;
      lastPhase = (phaseAtStart + elapsed) % PERIOD_MS;
      active = null;
    };

    document.addEventListener("pointerenter", onEnter, true);
    document.addEventListener("pointerleave", onLeave, true);
    document.addEventListener("focusin", onEnter, true);
    document.addEventListener("focusout", onLeave, true);

    return () => {
      document.removeEventListener("pointerenter", onEnter, true);
      document.removeEventListener("pointerleave", onLeave, true);
      document.removeEventListener("focusin", onEnter, true);
      document.removeEventListener("focusout", onLeave, true);
    };
  }, []);

  return null;
}
