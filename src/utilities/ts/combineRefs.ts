const combineRefs = (...refs: any[]) => {
  return (current: HTMLElement | null) => {
    refs.forEach(ref => {
      if (typeof ref === 'function') {
        ref(current);
      } else if (ref != null) {
        ref.current = current;
      }
    });
  };
};

export default combineRefs;