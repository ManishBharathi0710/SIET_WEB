import { useEffect, useRef } from 'react';
import { mountSite } from './router/index.js';

export default function App() {
  const siteRoot = useRef(null);
  useEffect(() => mountSite(siteRoot.current), []);
  return <div ref={siteRoot} className="site-application" />;
}
