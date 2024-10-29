import { html, fixture, expect } from '@open-wc/testing';
import "../IST256-Project1.js";

describe("IST256-Project1 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <IST256-Project1
        title="title"
      ></IST256-Project1>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
