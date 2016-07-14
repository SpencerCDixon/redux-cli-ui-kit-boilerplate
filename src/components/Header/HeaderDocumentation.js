/* eslint-disable */
import React, { Component } from 'react';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import Table from 'components/Table';
import P from 'components/P';

class HeaderDocumentation extends Component {
  render() {
    return (
      <Card>
        <CardHeader>Header Component Props</CardHeader>
        <CardContent>
          <P>
            Description of what this component does
          </P>

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
                <td>Text to be displayed inside header</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default HeaderDocumentation;
/* eslint-enable */
