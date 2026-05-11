import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Card } from './Card';
import { Chip } from './Chip';
import { Input } from './Input';
import { Spinner } from './Spinner';
import { Switch } from './Switch';
import { Tabs } from './Tabs';
import { Tooltip } from './Tooltip';

const meta: Meta = {
  title: 'Recipes/HeroUI Replacement',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LtSlideEditorSurface: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState<string | number>('decks');
    const [publicDeck, setPublicDeck] = useState(true);

    return (
      <main className="min-h-screen bg-ufoo-workspace p-6 text-ufoo-ink">
        <div className="mx-auto grid max-w-6xl gap-6">
          <header className="flex flex-wrap items-center justify-between gap-3 border-b border-ufoo-panel-border pb-4">
            <div>
              <Chip className="mb-3" color="accent" variant="soft">
                lt-slide-editor
              </Chip>
              <h1 className="text-3xl font-black">HeroUI replacement surface</h1>
              <p className="mt-1 text-sm text-ufoo-muted">
                Button, Card, Input, Tabs, Switch, Spinner, Chip, and Tooltip in one editor-like view.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">Preview</Button>
              <Button variant="primary">Create deck</Button>
            </div>
          </header>

          <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="grid gap-4">
              <Tabs aria-label="Dashboard sections" selectedKey={activeTab} onSelectionChange={setActiveTab}>
                <Tabs.List className="min-w-max rounded-md border border-ufoo-panel-border bg-ufoo-panel p-1">
                  <Tabs.Tab id="decks">Decks</Tabs.Tab>
                  <Tabs.Tab id="shared">Shared slides</Tabs.Tab>
                  <Tabs.Tab id="media">Media</Tabs.Tab>
                </Tabs.List>
              </Tabs>

              <Card className="border border-ufoo-panel-border bg-ufoo-panel shadow-none">
                <Card.Content>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div className="min-w-0">
                      <h2 className="truncate text-xl font-black">Next Lightning Talk</h2>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-ufoo-muted">
                        <Chip color={publicDeck ? 'accent' : 'default'} size="sm" variant="soft">
                          {publicDeck ? 'Public' : 'Private'}
                        </Chip>
                        <span>Updated: today</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:justify-end">
                      <Button size="sm" variant="outline">View</Button>
                      <Button size="sm" variant="outline">Delete</Button>
                      <Button size="sm" variant="primary">Edit</Button>
                    </div>
                  </div>
                </Card.Content>
              </Card>

              <Card className="border border-dashed border-ufoo-panel-border bg-ufoo-panel/80 shadow-none">
                <Card.Content className="items-center p-8 text-center">
                  <Spinner color="accent" size="sm" />
                  <p className="font-semibold text-ufoo-muted">Loading media library...</p>
                </Card.Content>
              </Card>
            </div>

            <Card className="border border-ufoo-panel-border bg-ufoo-panel shadow-none">
              <Card.Content className="gap-4 p-5">
                <h2 className="text-lg font-black">Deck settings</h2>
                <label className="grid gap-1 text-sm font-semibold">
                  Title
                  <Input defaultValue="Next Lightning Talk" variant="primary" />
                </label>
                <label className="grid gap-1 text-sm font-semibold">
                  Footer
                  <Input placeholder="Optional footer" variant="primary" />
                </label>
                <Switch
                  className="w-fit border border-ufoo-panel-border bg-ufoo-input px-3 py-2 text-sm"
                  isSelected={publicDeck}
                  size="sm"
                  onChange={setPublicDeck}
                >
                  <Switch.Control />
                  Public
                </Switch>
                <div className="flex items-center rounded-lg bg-ufoo-input p-1">
                  <code className="min-w-0 flex-1 truncate px-2 text-xs text-ufoo-muted">![demo](media/demo.png)</code>
                  <Tooltip>
                    <Button aria-label="Copy markdown" isIconOnly size="sm" variant="ghost">
                      <svg aria-hidden="true" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect height="14" rx="2" width="14" x="8" y="8" />
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                      </svg>
                    </Button>
                    <Tooltip.Content>Copy markdown</Tooltip.Content>
                  </Tooltip>
                </div>
              </Card.Content>
            </Card>
          </section>
        </div>
      </main>
    );
  },
};
