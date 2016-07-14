import React, { Component } from 'react';
import Button from 'components/Button';

import Text from 'components/Text';
import Example from 'development/components/Example';
import ExampleDescription from 'development/components/ExampleDescription';
import ExampleContent from 'development/components/ExampleContent';
import ProductionExample from 'development/components/ProductionExample';
import ToggleText from 'development/components/ToggleText';
import CodeBlock from 'development/components/CodeBlock';

class CallToActionExample extends Component {
  render() {
    return (
      <Example title="Call To Action">
        <ExampleDescription>
          Use the call-to-action button to guide users through the steps of major workflows, 
          such as using one for each stage of exam's five stages.
        </ExampleDescription>

        <ExampleContent>
          <Button isCta>Call To Action</Button>
          <span style={{padding: '5px'}} />
          <Button isCta isLarge>Call To Action (large)</Button>
        </ExampleContent>

        <ToggleText header="Interaction Details">
          <Text>
            Only one call-to-action button should be visible at a time on a page. 
            It may move within a critical workflow. For example, in the athenaClinicals streamlined encounter's 
            Assessment and Plan section, the Sign Orders button can be a call-to-action button, 
            but once all orders signed, the Next button becomes the section's call-to-action button.
          </Text>
        </ToggleText>

        <ToggleText header="Visual Details">
          <Text>
            Call to action buttons often appear in headers, in which case they are the same size but use a larger font.
          </Text>
        </ToggleText>

        <ToggleText header="Implementation Details">
          <CodeBlock>
            {`
  <ExampleContent>
    <Button isCta>Call To Action</Button>
    <span style={{padding: '5px'}} />
    <Button isCta isLarge>Call To Action (large)</Button>
  </ExampleContent>
            `}
          </CodeBlock>
        </ToggleText>

        <ProductionExample>
          Besides being used in the athenaNet login workflow, the athenaClinicals 
          Streamlined view's exam workflow uses the call-to-action button in the top right 
          of each section to move from Review to HPI to ROS, etc.
        </ProductionExample>
      </Example>
    );
  }
}

export default CallToActionExample;
