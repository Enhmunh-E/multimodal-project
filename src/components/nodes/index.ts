import type { BuiltInNode, Node, NodeTypes } from "@xyflow/react";
import PositionLoggerNode, {
  type PositionLoggerNode as PositionLoggerNodeType,
} from "./PositionLoggerNode";
export const initialNodes = [
  {
    id: "27",
    position: { x: 0, y: 0 },
    data: { label: "I feel like there arent many people from my culture" },
  },
  {
    id: "26",
    position: { x: 100, y: 0 },
    data: { label: "some segregation but other than that not really" },
  },
  {
    id: "25",
    position: { x: 200, y: 0 },
    data: {
      label:
        "I'd If I play bad in ping pont. If I don't understand or know a programming language. If I don't know or am up to date with events.",
    },
  },
  {
    id: "24",
    position: { x: 300, y: 0 },
    data: {
      label:
        "Everyone here is so smart so when I have a dumb moment it can be isolating.",
    },
  },
  {
    id: "23",
    position: { x: 400, y: 0 },
    data: {
      label:
        "Not really, I think some people don't go out of their shell, however once you do, you can escape different bubbles such as competitive natures of some groups etc",
    },
  },
  {
    id: "22",
    position: { x: 500, y: 0 },
    data: { label: "No" },
  },
  {
    id: "21",
    position: { x: 600, y: 0 },
    data: { label: "No." },
  },
  {
    id: "20",
    position: { x: 700, y: 0 },
    data: { label: "My grades" },
  },
  {
    id: "19",
    position: { x: 800, y: 0 },
    data: { label: "Nope" },
  },
  {
    id: "18",
    position: { x: 900, y: 0 },
    data: { label: "No" },
  },
  {
    id: "17",
    position: { x: 1000, y: 0 },
    data: {
      label:
        "Maybe when i feel like i have insufficient english skills when responding to professors’ questions because my answers are relatively short.",
    },
  },
  {
    id: "16",
    position: { x: 1100, y: 0 },
    data: { label: "Being in a course for other majors" },
  },
  {
    id: "15",
    position: { x: 1200, y: 0 },
    data: { label: "No" },
  },
] satisfies Node[];

// export const initialNodes = [
//   {
//     id: "23",
//     position: { x: 5*3*149, y: 5*3*153 },
//     data: { label: "Yes" },
//   },
//   {
//     id: "22",
//     position: { x: 5*3*132, y: 5*3*97 },
//     data: { label: "Yes, it is the way we carry ourselves" },
//   },
//   {
//     id: "21",
//     position: { x: 5*3*-81, y: 5*3*-186 },
//     data: { label: "Both" },
//   },
//   {
//     id: "20",
//     position: { x: 5*3*53, y: 5*3*-48 },
//     data: {
//       label:
//         "yes because our choices in life make up and decide who we are in life today.",
//     },
//   },
//   {
//     id: "19",
//     position: { x: 5*3*-184, y: 5*3*-152 },
//     data: {
//       label:
//         "Yes because it’s a combination of how we represent ourselves and how others view us",
//     },
//   },
//   {
//     id: "18",
//     position: { x: 5*3*-63, y: 5*3*-113 },
//     data: {
//       label:
//         "Somewhat because some parts of our identity are caused by our environments...",
//     },
//   },
//   {
//     id: "17",
//     position: { x: 5*3*196, y: 5*3*104 },
//     data: {
//       label:
//         "Yes, because our identity is a guide in leading us to discover our own deep personality.",
//     },
//   },
//   {
//     id: "15",
//     position: { x: 5*3*132, y: 5*3*77 },
//     data: {
//       label:
//         "No, identity is given + all the choices one has made. Whether or not one may long to view oneself in a certain way identity does not change.",
//     },
//   },
// ] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  // Add any of your custom nodes here!
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType = BuiltInNode | PositionLoggerNodeType;
