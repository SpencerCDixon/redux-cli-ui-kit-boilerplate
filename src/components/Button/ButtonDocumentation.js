/* eslint-disable */
import React, { Component } from 'react';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import Table from 'components/Table';
import Text from 'components/Text';

class ButtonDocumentation extends Component {
  render() {
    return (
      <Card>
        <CardHeader withRule>Button Component Props</CardHeader>
        <CardContent>
          <Text block>
            Just a simple button
          </Text>

          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Default Value</th>
                <th>Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>children</td>
                <td width='20%'><code>node</code></td>
                <td>Children to be displayed inside the button</td>
                <td></td>
                <td>✓</td>
              </tr>
              <tr>
                <td>onClick</td>
                <td width='20%'><code>func</code></td>
                <td>Callback fired off when clicked</td>
                <td>() &#x3D;&gt; alert(&#x27;replace me&#x27;)</td>
                <td></td>
              </tr>
              <tr>
                <td>isActive</td>
                <td width='20%'><code>bool</code></td>
                <td>Boolean to determine whether or not button is highlighted</td>
                <td>false</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default ButtonDocumentation;
/* eslint-enable */
