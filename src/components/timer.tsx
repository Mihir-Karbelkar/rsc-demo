'use client';
import React, { useEffect, useState } from 'react';

function Timer({ id }: { id: string }) {
  const [timer, setTime] = useState<number>(0);
  useEffect(() => {
    let x: MutationObserver;
    if (id) {
      const interval = setInterval(() => {
        setTime((time) => time + 100);
      }, 100);
      x = new MutationObserver((e) => {
        if (e?.[0]?.removedNodes?.length) {
          clearInterval(interval);
        }
      });
      x.observe(document.getElementById(id) as Node, { childList: true });
    }
    return () => {
      x?.disconnect();
    };
  }, [id]);
  return <>{timer / 1000}s</>;
}

export default Timer;
