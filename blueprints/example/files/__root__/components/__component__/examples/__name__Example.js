import React, { Component } from 'react';
import <%= componentName %> from 'components/<%= componentName %>';

import Example from 'components/Example';
import ExampleDescription from 'components/ExampleDescription';
import ExampleContent from 'components/ExampleContent';
import CodeBlock from 'components/CodeBlock';

class <%= pascalEntityName %>Example extends Component {
  render() {
    return (
      <Example title="<%= pascalEntityName %>">
        <ExampleDescription>
        </ExampleDescription>

        <ExampleContent>
        </ExampleContent>

        <CodeBlock>
          {`
          `}
        </CodeBlock>
      </Example>
    );
  }
}

export default <%= pascalEntityName %>Example;
