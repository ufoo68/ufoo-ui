import React from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { EditorShell } from './components/EditorShell';
import { InspectorField, InspectorInput, InspectorPanel, InspectorSection } from './components/InspectorPanel';
import { SlideThumbnail } from './components/SlideThumbnail';
import { ToolButton, Toolbar, ToolbarGroup } from './components/Toolbar';

function App() {
  return (
    <div className="min-h-screen space-y-12 bg-ufoo-dark p-8">
      <header className="border-b-2 border-ufoo-neon pb-4">
        <h1 className="text-6xl font-black text-ufoo-neon italic uppercase tracking-tighter ufoo-glow">
          ufoo UI
        </h1>
        <p className="font-mono text-ufoo-pink">// SLIDE EDITOR READY REACT COMPONENTS</p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Slide Editor Shell</h2>
        <EditorShell
          toolbar={
            <Toolbar>
              <ToolbarGroup label="History">
                <ToolButton label="Undo" icon="↶" />
                <ToolButton label="Redo" icon="↷" />
              </ToolbarGroup>
              <ToolbarGroup label="Insert">
                <ToolButton label="Select" icon="↖" active />
                <ToolButton label="Text" icon="T" />
                <ToolButton label="Shape" icon="□" />
                <ToolButton label="Image" icon="▧" />
              </ToolbarGroup>
              <ToolbarGroup label="Run">
                <ToolButton label="Present" icon="▶" showLabel />
              </ToolbarGroup>
            </Toolbar>
          }
          sidebar={
            <div className="space-y-2 p-3">
              <SlideThumbnail slideNumber={1} title="Opening" meta="16:9" selected>
                <div className="flex size-full items-center justify-center bg-slate-950 text-xs font-bold text-cyan-300">
                  LT
                </div>
              </SlideThumbnail>
              <SlideThumbnail slideNumber={2} title="Agenda" meta="3 blocks" />
              <SlideThumbnail slideNumber={3} title="Demo" meta="Code + notes" />
            </div>
          }
          inspector={
            <InspectorPanel title="Selection">
              <InspectorSection title="Position">
                <InspectorField label="X">
                  <InspectorInput defaultValue="120" unit="px" />
                </InspectorField>
                <InspectorField label="Y">
                  <InspectorInput defaultValue="88" unit="px" />
                </InspectorField>
              </InspectorSection>
              <InspectorSection title="Canvas">
                <InspectorField label="Width">
                  <InspectorInput defaultValue="1280" unit="px" />
                </InspectorField>
                <InspectorField label="Height">
                  <InspectorInput defaultValue="720" unit="px" />
                </InspectorField>
              </InspectorSection>
            </InspectorPanel>
          }
          statusbar="100% zoom · 3 slides · Saved"
        >
          <div className="mx-auto flex aspect-video max-w-5xl items-center justify-center rounded-sm bg-ufoo-canvas p-12 text-slate-950 shadow-2xl">
            <div className="w-full">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-cyan-700">Lightning Talk</p>
              <h2 className="max-w-2xl text-5xl font-black leading-tight">
                Build slides directly from structured ideas
              </h2>
            </div>
          </div>
        </EditorShell>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="neon">Launch System</Button>
          <Button variant="pink">Initialize Core</Button>
          <Button variant="outline">Secondary Protocol</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large Ops</Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold uppercase tracking-widest text-white">Cards</h2>
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
