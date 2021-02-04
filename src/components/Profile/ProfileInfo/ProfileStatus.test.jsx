import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="Beoning" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Beoning");
  });

  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status="Beoning" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.length).toBe(1);
  });
});
