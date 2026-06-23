import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioSection, ProjectCard, SkillBadge, SkillGroup } from './Portfolio';

const meta: Meta<typeof ProjectCard> = {
  title: 'Portfolio/Portfolio Parts',
  component: ProjectCard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const PortfolioGrid: Story = {
  render: () => (
    <PortfolioSection
      description="CMSから受け取った画像、説明、技術スタック、リンクをそのまま組み立てられます。"
      eyebrow="Selected work"
      title="個人開発"
      tone="muted"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {['Quiz Studio', 'Slide Maker', 'Developer Portfolio'].map((title, index) => (
          <ProjectCard
            action={
              <a className="font-bold text-cyan-700 hover:text-cyan-900" href="#project">
                詳細を見る →
              </a>
            }
            description="アイデアを素早く形にするための、軽量で扱いやすいWebアプリケーションです。"
            eyebrow={index === 0 ? 'Featured' : 'Personal'}
            featured={index === 0}
            key={title}
            media={
              <div className="flex items-center justify-center bg-slate-900 text-lg font-black text-cyan-300">
                {title}
              </div>
            }
            technologies={['Next.js', 'React', 'TypeScript']}
            title={title}
          />
        ))}
      </div>
    </PortfolioSection>
  ),
};

export const Skills: Story = {
  render: () => (
    <PortfolioSection eyebrow="Toolbox" title="スキルセット">
      <div className="grid gap-5 md:grid-cols-2">
        <SkillGroup title="言語">
          <SkillBadge meta="8年" name="TypeScript" tone="accent" />
          <SkillBadge meta="10年" name="PHP" />
          <SkillBadge meta="5年" name="Go" />
        </SkillGroup>
        <SkillGroup title="フレームワーク">
          <SkillBadge meta="6年" name="React" tone="accent" />
          <SkillBadge meta="5年" name="Next.js" />
          <SkillBadge meta="8年" name="Laravel" />
        </SkillGroup>
      </div>
    </PortfolioSection>
  ),
};
