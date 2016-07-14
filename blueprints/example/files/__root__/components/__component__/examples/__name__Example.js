import React, { Component } from 'react';
import <%= componentName %> from 'components/<%= componentName %>';

import Text from 'components/Text';
import Example from 'development/components/Example';
import ExampleDescription from 'development/components/ExampleDescription';
import ExampleContent from 'development/components/ExampleContent';
import ProductionExample from 'development/components/ProductionExample';
import ToggleText from 'development/components/ToggleText';
import CodeBlock from 'development/components/CodeBlock';

class <%= pascalEntityName %>Example extends Component {
  render() {
    return (
      <Example title="<%= pascalEntityName %>">
        <ExampleDescription>
        </ExampleDescription>

        <ExampleContent>
        </ExampleContent>

        <ToggleText header="Interaction Details">
          <Text>
          </Text>
        </ToggleText>

        <ToggleText header="Visual Details">
          <Text>
          </Text>
        </ToggleText>

        <ToggleText header="Implementation Details">
          <CodeBlock>
            {`
            `}
          </CodeBlock>
        </ToggleText>

        <ProductionExample>
        </ProductionExample>
      </Example>
    );
  }
}

export default <%= pascalEntityName %>Example;
