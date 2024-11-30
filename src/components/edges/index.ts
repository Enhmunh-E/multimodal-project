import type { BuiltInEdge, Edge, EdgeTypes } from "@xyflow/react";

import ButtonEdge, { type ButtonEdge as ButtonEdgeType } from "./ButtonEdge";

export const initialEdges = [
  // Connecting nodes with similar themes or sentiments
  { id: "27->26", source: "27", target: "26", animated: true }, // Cultural and academic challenges
  { id: "25->24", source: "25", target: "24", animated: true }, // Academic performance concerns
] satisfies Edge[];

// export const initialEdges = [
//   { id: "a->c", source: "a", target: "c", animated: true },
//   { id: "b->d", source: "b", target: "d", type: "button-edge" },
//   { id: "c->d", source: "c", target: "d", animated: true },
// ] satisfies Edge[];

// export const initialEdges = [
//   {
//     id: "23->22",
//     source: "23",
//     target: "22",
//     animated: true,
//     type: "floating",
//   },
//   {
//     id: "22->21",
//     source: "22",
//     target: "21",
//     animated: true,
//     type: "floating",
//   },
//   {
//     id: "21->20",
//     source: "21",
//     target: "20",
//     animated: true,
//     type: "floating",
//   },
//   {
//     id: "20->19",
//     source: "20",
//     target: "19",
//     animated: true,
//     type: "floating",
//   },
//   {
//     id: "19->18",
//     source: "19",
//     target: "18",
//     animated: true,
//     type: "floating",
//   },
//   {
//     id: "18->17",
//     source: "18",
//     target: "17",
//     animated: true,
//     type: "floating",
//   },
//   {
//     id: "17->15",
//     source: "17",
//     target: "15",
//     animated: true,
//     type: "floating",
//   },
// ] satisfies Edge[];

export const edgeTypes = {
  // Add your custom edge types here!
  "button-edge": ButtonEdge,
} satisfies EdgeTypes;

// Append the types of you custom edges to the BuiltInEdge type
export type CustomEdgeType = BuiltInEdge | ButtonEdgeType;
