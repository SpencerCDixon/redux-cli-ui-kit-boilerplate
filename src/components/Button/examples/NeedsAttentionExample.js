import React, { Component } from 'react';
import Button from 'components/Button';

import Text from 'components/Text';
import Example from 'development/components/Example';
import ExampleDescription from 'development/components/ExampleDescription';
import ExampleContent from 'development/components/ExampleContent';
import ProductionExample from 'development/components/ProductionExample';
import ToggleText from 'development/components/ToggleText';
import CodeBlock from 'development/components/CodeBlock';

class NeedsAttentionExample extends Component {
  render() {
    return (
      <Example title="Needs Attention">
        <ExampleDescription>
          Highlight default buttons in critical workflows that may require additional 
          steps before the button can be fully used.
        </ExampleDescription>

        <ExampleContent>
          <Button needsAttention>
            Needs Attention
          </Button>
        </ExampleContent>

        <ToggleText header="Interaction Details">
          <Text>
            When the user clicks a highlighted button the system may (1) partially complete a set of actions, such as signing all valid orders in the athenaClinicals Streamlined view Assessment & Plan, but leaving incomplete orders unsigned, (2) tell the user how to provide required information or do required steps, or (3) both.
          </Text>
        </ToggleText>

        <ToggleText header="Visual Details">
          <Text>
The left border uses @colors-border-needs-attention. Call to action buttons lose their green color while in the needs attention state.
          </Text>
        </ToggleText>

        <ToggleText header="Implementation Details">
          <CodeBlock>
            {`
  <ExampleContent>
    <Button needsAttention>
      Needs Attention
    </Button>
  </ExampleContent>
            `}
          </CodeBlock>
        </ToggleText>

        <ProductionExample>
In the athenaClinicals Streamlined view intake section, the top right "Done with Intake" button starts with a attention-button highlight.
        </ProductionExample>
      </Example>
    );
  }
}

export default NeedsAttentionExample;
