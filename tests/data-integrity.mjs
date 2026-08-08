import assert from "node:assert/strict";
import fs from "node:fs";

const appSource = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const htmlSource = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8");
const dataSource = appSource.split("const state =")[0];
const loadData = Function(
  `${dataSource}\nreturn { theories, researchers, milestones, aiedBranches, aiedMilestones, milestoneExplanations, aiedExplanations };`,
);
const {
  theories,
  researchers,
  milestones,
  aiedBranches,
  aiedMilestones,
  milestoneExplanations,
  aiedExplanations,
} = loadData();

const allMilestones = [...milestones, ...aiedMilestones];
const theoryIds = new Set(theories.map(({ id }) => id));
const branchIds = new Set(aiedBranches.map(({ id }) => id));
const researcherIds = new Set(Object.keys(researchers));
const milestoneIds = allMilestones.map(({ id }) => id);

assert.equal(theories.length, 11, "Unexpected number of theory/focus lanes");
assert.equal(milestones.length, 66, "Unexpected number of main timeline milestones");
assert.equal(aiedMilestones.length, 24, "Unexpected number of AIED milestones");
assert.equal(new Set(milestoneIds).size, milestoneIds.length, "Milestone IDs must be unique");

for (const item of milestones) {
  assert(theoryIds.has(item.theory), `${item.id}: unknown theory ${item.theory}`);
  assert(milestoneExplanations[item.id], `${item.id}: missing timeline explanation`);
}

for (const item of aiedMilestones) {
  assert(branchIds.has(item.branch), `${item.id}: unknown AIED branch ${item.branch}`);
  assert(aiedExplanations[item.id], `${item.id}: missing AIED explanation`);
}

for (const item of allMilestones) {
  assert(researcherIds.has(item.researcher), `${item.id}: unknown contributor ${item.researcher}`);
  assert(Number.isInteger(item.year) && item.year >= 1890 && item.year <= 2026, `${item.id}: invalid year`);
  assert(item.title && item.study && item.summary, `${item.id}: missing required copy`);
  assert.match(item.source, /^https:\/\//, `${item.id}: source must use HTTPS`);
}

for (const id of Object.keys(milestoneExplanations)) {
  assert(milestones.some((item) => item.id === id), `${id}: orphan timeline explanation`);
}

for (const id of Object.keys(aiedExplanations)) {
  assert(aiedMilestones.some((item) => item.id === id), `${id}: orphan AIED explanation`);
}

const byId = new Map(allMilestones.map((item) => [item.id, item]));
assert.equal(byId.get("atkinson-1968")?.researcher, "atkinsonShiffrin");
assert.equal(byId.get("von-glasersfeld-1984")?.researcher, "vonGlasersfeld");
assert.equal(byId.get("science-learning-centers-2003")?.year, 2003);
assert.equal(byId.get("coi-1999")?.year, 1999);
assert.match(byId.get("egra-2023")?.evidence ?? "", /origin remains unresolved/i);

const agentivismItems = allMilestones.filter((item) => /agentivism/i.test(item.title));
assert(agentivismItems.length > 0, "Agentivism milestone missing");
for (const item of agentivismItems) {
  assert.match(item.evidence ?? "", /preprint/i, `${item.id}: Agentivism must be labeled preprint`);
}

const forbiddenText = [
  "10.1002/acp.1408",
  "science-learning-centers-2004",
  "coi-2000",
  "aied-conference-1987",
  "egra-2022",
  "researchgate.net",
];
for (const text of forbiddenText) {
  assert(!appSource.toLowerCase().includes(text.toLowerCase()), `Forbidden stale value remains: ${text}`);
}

const htmlIds = new Set([...htmlSource.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]));
const referencedElementIds = [...appSource.matchAll(/document\.getElementById\("([^"]+)"\)/g)].map(
  (match) => match[1],
);
for (const id of referencedElementIds) {
  assert(htmlIds.has(id), `app.js references missing HTML id: ${id}`);
}

console.log(`Data integrity checks passed for ${allMilestones.length} milestones.`);
