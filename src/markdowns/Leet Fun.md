> :seedling: Leet Fun



> **Sliding Window Optimized**

`visualization`: https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/

`set-up`:

- substrings with non-duplicate letters

`intuition`: 

- we start off looking at the first substring `s[start:end]`
- check if the next character is in this substring
  - if true
    - record max length
    - `start += 1`
    - `note`: we already know that every character in this substring is ***unique***, so we don't have to reset `end`
  - else
    - include this character in the substring, and check the next character

`code`:

```python
def lengthOfLongestSubstring(self, s):
	# base cases:
    if s == "": return 0
    if len(s) == 1: return 1
    if len(s) == 2: return int(not (s[0] == s[1])) + 1

    start = 0
    end = 1
    m = 0;

    while(end < len(s)):
        if(s[end] in s[start:end]):
            m = max(m, len(s[start:end]))
            start += 1
        else:
            end += 1

    m = max(m, len(s[start:end])) # case: we exit the loop before checking max. 

    return m
```

