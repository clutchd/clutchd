import { Avatar } from "@clutchd/avatar";
import { Card } from "@clutchd/card";
import * as React from "react";
import { Showcase } from ".";

function AvatarShowcase({ color }) {
  return (
    <Showcase title="Avatar">
      <Card className="mb-6">
        <Avatar src="" theme={color} />
      </Card>
      <Card>
        <Avatar
          src="https://avatars.githubusercontent.com/u/22361526"
          theme={color}
        />
      </Card>
    </Showcase>
  );
}

export { AvatarShowcase };
