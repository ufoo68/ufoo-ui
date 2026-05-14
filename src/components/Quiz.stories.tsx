import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Input } from './Input';
import { QuizChoice, QuizQuestionCard, QuizStats } from './Quiz';

const meta: Meta<typeof QuizQuestionCard> = {
  title: 'Quiz/QuizQuestionCard',
  component: QuizQuestionCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const QuestionEditor: Story = {
  render: () => (
    <div className="grid w-[720px] gap-4 bg-ufoo-workspace p-6">
      <QuizStats
        items={[
          { label: 'Questions', value: 12, tone: 'accent' },
          { label: 'Total score', value: '120 pt' },
          { label: 'Estimated', value: '8 min', tone: 'success' },
        ]}
      />
      <QuizQuestionCard
        actions={
          <>
            <Button size="sm" variant="ghost">Duplicate</Button>
            <Button size="sm" variant="primary">Save</Button>
          </>
        }
        description="Choose the answer that best matches the release policy."
        difficulty="normal"
        footer="Explanation: stable releases should be announced after the changelog and package dry-run are verified."
        points={10}
        questionNumber={3}
        status="ready"
        title="Which step should happen before publishing a package?"
        type="single"
      >
        <QuizChoice label="A" meta="0 pt">
          Push directly to npm from a local branch
        </QuizChoice>
        <QuizChoice label="B" meta="10 pt" state="correct">
          Run a dry-run package check and review the generated files
        </QuizChoice>
        <QuizChoice label="C" meta="0 pt">
          Skip changelog updates for patch versions
        </QuizChoice>
      </QuizQuestionCard>
    </div>
  ),
};

export const CompactList: Story = {
  render: () => (
    <div className="grid w-[520px] gap-3 bg-ufoo-workspace p-6">
      <QuizQuestionCard
        difficulty="easy"
        points={5}
        questionNumber={1}
        status="published"
        title="What does JSX compile to?"
        type="single"
      />
      <QuizQuestionCard
        difficulty="hard"
        points={20}
        questionNumber={2}
        status="draft"
        title="Explain how hydration mismatches happen."
        type="text"
      />
    </div>
  ),
};

export const ChoiceStates: Story = {
  render: () => (
    <div className="grid w-96 gap-3 bg-ufoo-panel p-5">
      <Input placeholder="Choice text" />
      <QuizChoice label="A">Default choice</QuizChoice>
      <QuizChoice label="B" state="selected">Currently selected</QuizChoice>
      <QuizChoice label="C" state="correct">Correct answer</QuizChoice>
      <QuizChoice label="D" state="incorrect">Incorrect answer</QuizChoice>
    </div>
  ),
};
