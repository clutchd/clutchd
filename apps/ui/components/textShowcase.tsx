import {
  Bold,
  Caption,
  Heading,
  Italic,
  Subtitle,
  Text,
  Title,
} from "@clutchd/text";
import { default as React } from "react";
import { Showcase } from ".";

function TextShowcase() {
  return (
    <Showcase title="Text">
      <Heading>
        (900 Heading) The quick brown fox jumps over the lazy dog
      </Heading>
      <Title>(700 Title) The quick brown fox jumps over the lazy dog</Title>
      <Subtitle>
        (500 Subtitle) The quick brown fox jumps over the lazy dog
      </Subtitle>
      <Text>(700 Text) The quick brown fox jumps over the lazy dog</Text>
      <Text>
        <Bold>(700 Bold) The quick brown fox jumps over the lazy dog</Bold>
      </Text>
      <Text>
        <Italic>
          (700 Italic) The quick brown fox jumps over the lazy dog
        </Italic>
      </Text>
      <Caption>
        (500 Caption) The quick brown fox jumps over the lazy dog
      </Caption>
    </Showcase>
  );
}

export { TextShowcase };
