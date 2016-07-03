import React from 'react';
import Stack from './stack/stack';
import Header from './header/header';
import Nav from './nav/nav';
import Container from './container/container';
import Section from './section/section';
import TextField from './form/text-field/text-field';
import TextArea from './form/text-area/text-area';
import Button from './form/button/button';
import Select from './form/select/select';
import Checkbox from './form/checkbox/checkbox';
import RadioButton from './form/radio-button/radio-button';
import List from './list/list';

require('../assets/scss/style.scss');

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header>
          <Nav title={{
            name: 'Threads', link: '/'
          }} items={[]} />
        </Header>
        <Container>
          <Section>
            <h2>Forms</h2>

            <Section>
              <h3>Text field</h3>
              <TextField id="test-text-field" label="Test test field" />
            </Section>

            <Section>
              <h3>Button</h3>
              <Stack>
                <Button id="test-default-button" label="Default button" />
                <Button id="test-primary-button" label="Primary button" primary />
                <Button id="test-danger-button" label="Danger button" danger />
              </Stack>
            </Section>

            <Section>
              <h3>Select</h3>
              <Select id="test-select" label="Test select"
                options={[
                  {value: 'option1', label: 'Option 1'},
                  {value: 'option2', label: 'Option 2'},
                  {value: 'option3', label: 'Option 3'}
                ]} />
            </Section>
            <Section>
              <h3>Checkbox</h3>
              <Checkbox id="test-checkbox-1" label="Checkbox 1" />
              <Checkbox id="test-checkbox-2" label="Checkbox 2" />
            </Section>
            <Section>
              <h3>Radio button</h3>
              <RadioButton id="test-radio-button-1" name="test-radio-button" label="Radio button 1" />
              <RadioButton id="test-radio-button-2" name="test-radio-button" label="Radio button 2" />
            </Section>
            <Section>
              <h3>Text area</h3>
              <TextArea id="example-text-area" name="example-text-area" label="Example text area" />
            </Section>
          </Section>
          <Section>
            <h2>Typography</h2>
            <Section>
              <h3>Headings</h3>

              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
            </Section>
            <Section>
              <h3>Paragraphs</h3>

              <p>Lorem ipsum dolor sit amet, <a href="#" title="test link">test link</a> adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>

              <p>Lorem ipsum dolor sit amet, <em>emphasis</em> consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem. Aliquam libero nisi, imperdiet at, tincidunt nec, gravida vehicula, nisl. Praesent mattis, massa quis luctus fermentum, turpis mi volutpat justo, eu volutpat enim diam eget metus. Maecenas ornare tortor. Donec sed tellus eget sapien fringilla nonummy. Mauris a ante. Suspendisse quam sem, consequat at, commodo vitae, feugiat in, nunc. Morbi imperdiet augue quis tellus.</p>
            </Section>
            <Section>
              <h3>Lists</h3>

              <h4>Definition list</h4>
              <dl>
                <dt>Definition list title</dt>
                <dd>This is a definition list division.</dd>
              </dl>

              <h4>Ordered list</h4>
              <List type="ordered">
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
              </List>

              <h4>Unordered list</h4>
              <List type="unordered">
                <li>List Item 1</li>
                <li>List Item 2</li>
                <li>List Item 3</li>
              </List>
            </Section>

            <Section>
              <h3>Tables</h3>

              <table>
                <thead>
                  <tr>
                    <th>Table header 1</th>
                    <th>Table header 2</th>
                    <th>Table header 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Division 1</td>
                    <td>Division 2</td>
                    <td>Division 3</td>
                  </tr>
                  <tr>
                    <td>Division 1</td>
                    <td>Division 2</td>
                    <td>Division 3</td>
                  </tr>
                  <tr>
                    <td>Division 1</td>
                    <td>Division 2</td>
                    <td>Division 3</td>
                  </tr>
                </tbody>
              </table>
            </Section>
            <Section>
              <h3>Block quote</h3>

              <blockquote>
                Chains do not hold us together. It is threads, hundreds of tiny threads, which sew people together through the years.
              </blockquote>
            </Section>
          </Section>
        </Container>
      </div>
    );
  }
}
