import React from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-ufoo-dark p-12 space-y-12">
      <header className="border-b-2 border-ufoo-neon pb-4">
        <h1 className="text-6xl font-black text-ufoo-neon italic uppercase tracking-tighter ufoo-glow">
          ufoo UI
        </h1>
        <p className="text-ufoo-pink font-mono">// NEXT GEN REACT COMPONENTS</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="neon">Launch System</Button>
          <Button variant="pink">Initialize Core</Button>
          <Button variant="outline">Secondary Protocol</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large Ops</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="System Status">
            <p className="font-mono text-sm">
              All modules operational. Connection to matrix stable. 
              Glow levels within acceptable parameters.
            </p>
          </Card>
          <Card title="Security Alert" className="border-ufoo-pink">
            <p className="font-mono text-sm text-ufoo-pink">
              UNAUTHORIZED ACCESS DETECTED IN SECTOR 7G. 
              COUNTER-MEASURES ENGAGED.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default App;
