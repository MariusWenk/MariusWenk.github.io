---
layout: post
title: Voting Theory - Condorcet vs Consistency
date: 2025-03-31 11:57:00
description: Why finding a good voting system is mathematically difficult
tags: voting theory
categories: mathematics
giscus_comments: true
pretty_table: true
---

I recently learned about voting theory in the context of [this](https://www.lesswrong.com/posts/JbRkDvwXh39bEx3xw/voting-theory-introduction) blog by Scott Garrabrant, and while I can definitely recommend that blog, I felt like the conflict between Condorcet and Consistent voting systems could use a discussion of its own. During my analysis of the topic, I also discovered a [YouTube video](https://youtu.be/qf7ws2DF-zk?si=gz1GPLmaTZ96r3F5) on voting theory by Veritasium, which inspired some of this post and which I can highly recommend. But let's dive right into what Condorcet and Consistency actually mean for voting systems.
## Condorcet Voting Systems
A voting system is considered **Condorcet** if a candidate who would win in one-on-one votes against all other candidates in fact always wins. While this might sound obvious at first, keep in mind that for the very common plurality voting system, this criterion is not satisfied.

In **plurality voting**, every voter is given one vote that they may assign to exactly one candidate. The candidate that receives the most votes wins the election.  
We can easily create examples of how this voting system does not satisfy the condorcet criterion.  
Let’s take 3 candidates (A, B, and C) and 7 voters. In our example, the preferences look as follows:

- A > C > B
- A > C > B
- C > A > B
- C > A > B
- B > C > A
- B > C > A
- B > A > C

In this example, candidate B would receive three votes in plurality voting, while A and C would receive only two votes each. Therefore, candidate B would win the election. However, the majority of voters (in this case, four voters) would have preferred either candidate A or C over candidate B. This is because candidate B is very unpopular with a majority of voters, who are not as decided on whether candidate A or C is better. If candidate A had withdrawn their candidacy, then candidate C would have won the election instead. Similarly, the result of the election could be altered by adding candidates, thereby withdrawing votes from a candidate who otherwise would have won.

As a side effect of this, plurality voting can lead to the establishment of an effective two-party system because voters might prefer to support their second- or third-favorite candidate with higher chances of winning.

While it may seem here that plurality voting is not Condorcet because the voter has no chance to express how they rate the candidates, it is important to note that the more complex **Borda count** is also not Condorcet. In Borda count, every candidate is assigned an integer value by each voter, starting at 0 for the least favorite candidate and then adding one for every additional candidate in the inverse order of popularity.
## Consistency Criterion
A voting system is considered **Consistent** if two disjoint electorates that produce the same result would also produce that same result when combined. In fact, both plurality voting and Borda count introduced [above](#Condorcet Criterion) are quite obviously consistent, as the numbers would just add up together and the maximum would remain the same.

Let's have a look at what happens if we have a voting system that satisfies the Condorcet criterion. For such a voting system, we need every vote to give a relative order of preference between all candidates. From this data, we want to compare all pairs of candidates to see who is preferred by a majority. If there is one candidate preferred over every other candidate, then that candidate should obviously win in order to satisfy the Condorcet criterion. In this ideal case, one might also conclude that such a voting system is Consistent, but we have not looked at cases without one clear winner yet. The problem lies in how to decide who won based on relative preferences between candidates if there are preference cycles.

In the minimal case of three candidates, a **preference cycle** occurs if candidate A is preferred over candidate B by a majority, B is preferred over C, and C is preferred over A. The following population of voters shows an example of this.
#### Preference Cycle Population
Consider an election with three candidates: A, B, and C, and the following preferences:

| Number of Voters | Preference Order |
| ---------------- | ---------------- |
| 4                | A > B > C        |
| 3                | B > C > A        |
| 2                | C > A > B        |

Pairwise Comparisons:  
- A beats B (4 + 2 = 6 votes vs. 3 votes)
- B beats C (4 + 3 = 7 votes vs. 2 votes)
- C beats A (3 + 2 = 5 votes vs. 4 votes)
<p></p>
This creates a cycle:
A > B > C > A

In order to conduct votes based on relative preferences, different approaches to deal with preference cycles have been invented. One of these is called ranked pairs.

In the **ranked pairs** voting system, a margin of victory is assigned to every pair of candidates. This margin is simply the difference in the number of votes that prefer one candidate over the other. In case of a cycle, the pair with the smallest margin of victory is removed in order to break the cycle. The candidate that is on top of the remaining series of comparisons wins the election.

In our example, this would look as follows:
- B > C (margin = 5 votes)  
- A > B (margin = 3 votes)  
- C > A (margin = 1 vote) is ignored.
<p></p>
Thus, A wins as only A > B > C remains.

Note that this voting system satisfies the Condorcet criterion because, in the case where there is one candidate clearly preferred by everyone, there would be no cycle to break. The preferred candidate would be chosen as the winner because they would be the only candidate with positive margins of victory.

However, we want to show that this voting system is not Consistent. Therefore, we need to find an example of two populations of voters with the same winner, but where the winner of the combined voting population is different. Let us first examine the following two populations separately.
#### Population 1

| Number of Voters | Preference Order |
| ---------------- | ---------------- |
| 7                | A > B > C        |
| 3                | B > C > A        |
| 3                | C > A > B        |
| 3                | C > B > A        |

Pairwise Comparisons:  
- A beats B: 10 to 6
- B beats C: 10 to 6
- C beats A: 9 to 7
<p></p>
This creates a cycle:
A > B > C > A

Using ranked pairs, we lock in the strongest victories first:
- A > B (margin = 4 votes)  
- B > C (margin = 4 votes)  
- C > A (margin = 2 votes) is ignored.
<p></p>
Thus, A wins as only A > B > C remains.

#### Population 2

| Number of Voters | Preference Order |
| ---------------- | ---------------- |
| 4                | A > C > B        |
| 1                | C > B > A        |
| 2                | C > A > B        |

Pairwise Comparisons:
- A beats C: 4 to 3
- C beats B: 7 to 0
- A beats B: 6 to 1
<p></p>
There is no cycle and we have:
A > C > B; A > B.
Thus A wins.

#### Full Electorate
Now, we take the combined population of voters from population 1 and 2 and calculate who would win the election.

| Number of Voters | Preference Order |
| ---------------- | ---------------- |
| 7                | A > B > C        |
| 3                | B > C > A        |
| 5                | C > A > B        |
| 4                | A > C > B        |
| 4                | C > B > A        |

Pairwise Comparisons:
- A beats B: 16 to 7
- C beats B: 13 to 10
- C beats A: 12 to 11
<p></p>
There is no cycle and we have:
C > A > B; C > B
Thus C wins.

In the example for ranked pairs voting above, candidate A is indeed the winner in both subpopulations 1 and 2. However, in the combined population, the winner is a different candidate, namely C. This shows that ranked pairs voting is not consistent.
## Condorcet vs Consistent

While ranked pairs voting is just one example of a voting system that satisfies the Condorcet criterion, the conflict between Condorcet and Consistency exists across all voting systems under the following additional constraints:

1. The candidate set is finite.
2. The voting system only uses the votes cast as input.
3. The election produces a single winner as output.
4. The input distribution is uniform over some finite set.

As these criteria are typically assumed for any voting system, this conflict has immediate real-world consequences. The Condorcet criterion ensures that adding or removing candidates from the ballot would not change the election outcome. On the other hand, the consistency criterion implies something similar on the voter side. Imagine there was already a pre-election with only part of the population. There also is another group of people who have not yet voted but are satisfied with the result. If this group then participates in the election, the result should not change. However, in non-consistent voting systems, it can.

It seems that one must accept a trade-off either on the candidate side or the voter side. Perhaps democracy has to live with this kind of flaw. However, in his blog, Scott Garrabrant points out that removing the third condition in the list above - where one candidate is assigned a probability of one as the output - might resolve conflicts like this one.