import Home from '@/pages/home/home';
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
      <Home />
    </MotionConfig>
  );
}

export default App;
