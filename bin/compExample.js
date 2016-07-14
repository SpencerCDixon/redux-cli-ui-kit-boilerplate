import React, { Component, PropTypes } from 'react';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardContent from 'components/CardContent';
import Table from 'components/Table';
import Text from 'components/Text';

class Documentation extends Component {
  render() {
    return (
      <Card>
        <CardHeader withRule readOnly>{{title}}</CardHeader>
        <CardContent>
          <Text> {{description}} </Text>

          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Required</th>
                <th>Description</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
            {{#each props}}
              <tr>
                <td>{{name}}</td>
                <td>{{type}}</td>
                <td>{{#if required}}✓{{/if}}</td>
                <td>{{description}}</td>
                <td>{{defaultValue}}</td>
              </tr>
              {{/each}}
            </tbody>
          </Table>
        </CardContent>
      </Card>
    );
  }
}

export default Documentation;
