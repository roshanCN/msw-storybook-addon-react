import React from "react";
import { rest } from "msw";

import Profile from "../Profile";

export default {
  component: Profile,
  title: "Mocking Data with Profile Data",
};

const ProfileCard = () => <Profile />;

const TestData = {
  page: 2,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    }, 
  ],
  support: {
    url: "https://reqres.in/#support-heading",
    text:
      "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};

export const MockedSuccess = ProfileCard.bind({});
MockedSuccess.parameters = {
  msw: [
    rest.get("https://reqres.in/api/users", (_req, res, ctx) => {
      return res(ctx.json(TestData));
    }),
  ],
};

export const MockedError = ProfileCard.bind({});
MockedError.parameters = {
  msw: [
    rest.get("https://reqres.in/api/users", (_req, res, ctx) => {
      return res(ctx.delay(800), ctx.status(403));
    }),
  ],
};
