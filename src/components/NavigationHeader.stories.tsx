import type { Meta, StoryObj } from '@storybook/react';
import { NavigationHeader, NavigationItem } from './NavigationHeader';

const meta: Meta<typeof NavigationHeader> = {
  title: 'Portfolio/Navigation Header',
  component: NavigationHeader,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    tone: {
      control: 'select',
      options: ['light', 'dark', 'glass'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const navigation = (
  <>
    <NavigationItem active href="#top">トップ</NavigationItem>
    <NavigationItem href="#personal">個人開発</NavigationItem>
    <NavigationItem href="#work">仕事での開発</NavigationItem>
    <NavigationItem href="#skills">スキルセット</NavigationItem>
    <NavigationItem href="#contact">問い合わせ</NavigationItem>
  </>
);

export const Dark: Story = {
  args: {
    brand: (
      <a className="flex items-center gap-3 font-black" href="#top">
        <span className="grid size-9 place-items-center rounded-full bg-cyan-400 text-slate-950">U</span>
        <span>ufoo68</span>
      </a>
    ),
    navigation,
    actions: (
      <a className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-black text-slate-950" href="#contact">
        Contact
      </a>
    ),
  },
  render: (args) => (
    <div className="min-h-screen bg-slate-100">
      <NavigationHeader {...args} />
      <main className="mx-auto max-w-6xl px-5 py-24 text-slate-950">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Portfolio</p>
        <h1 className="mt-3 text-5xl font-black">Navigation header</h1>
        <p className="mt-5 max-w-xl text-slate-600">
          画面幅を狭くすると、JavaScript不要のモバイルメニューに切り替わります。
        </p>
      </main>
    </div>
  ),
};

export const Light: Story = {
  args: {
    ...Dark.args,
    tone: 'light',
  },
};
