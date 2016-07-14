import React, { Component } from 'react';
import Button from 'components/Button';
import Text from 'components/Text';

import Example from 'development/components/Example';
import ExampleDescription from 'development/components/ExampleDescription';
import ExampleContent from 'development/components/ExampleContent';
import ProductionExample from 'development/components/ProductionExample';
import ToggleText from 'development/components/ToggleText';
import CodeBlock from 'development/components/CodeBlock';

class BasicExample extends Component {
  state = {
    clicked: 0,
  }

  handleClick = () => {
    this.setState({ clicked: ++this.state.clicked });
  }

  render() {
    return (
      <Example title="Basic">
        <ExampleDescription>
          Buttons are how users tell the system to do something.
          Generic buttons are most often used to complete a workflow or acknowledge information.
        </ExampleDescription>

        <ExampleContent>
          <Button onClick={this.handleClick}>
            Increment
          </Button>
          <Text inline style={{ margin: '0 10px' }}>{this.state.clicked}</Text>
        </ExampleContent>

        <ToggleText header="Interaction Details">
          <Text>
            Buttons. You click on them and stuff happens.
            They have hover, active, focus, and disabled states.
          </Text>
          <Text>
            Generic buttons often complete a small workflow, like submitting a form.
            For the primary workflow currently available to the user,
            consider the call to action button.
          </Text>
        </ToggleText>
        <ToggleText header="Visual Details">
          <Text>
            Buttons' hover and active states are based on the interactive colors.
            The different states have very fast transitions to
            allow smooth changes without a noticeable delay.
            When buttons appear in headers they are the same size but use a larger font.
            See the call to action button for an example
          </Text>
        </ToggleText>
        <ToggleText header="Implementation Details">
          <CodeBlock>
            {`
  <ExampleContent>
    <Button onClick={this.handleClick}>
      Increment
    </Button>
    <Text inline style={{margin: '0 10px'}}>{this.state.clicked}</Text>
  </ExampleContent>
            `}
          </CodeBlock>
        </ToggleText>

        <ProductionExample>
          Open the patient's medication chart from within the athenaClinicals Streamlined view.
          Click the add (+) icon, search for a medication and select it.
          The popup should show a normal button to add the medication to the chart.
        </ProductionExample>
      </Example>
    );
  }
}

export default BasicExample;
