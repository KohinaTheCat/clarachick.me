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





> **Expand Around Center**

`set-up`: finding palindromes in reverse 

`intuition`: 

- odd
  - pick a character, check if the characters beside the substring are the same, and keep expanding
- even
  - pick two characters side-by-side

`code`:

```python
def longestPalindrome(self, s):
    self.maxlen = 0
    self.start = 0

    for i in range(len(s)):
        self.expandFromCenter(s,i,i) #even palindrome
        self.expandFromCenter(s,i,i+1) #odd palindrome

    return s[self.start:self.start+self.maxlen] 
            
def expandFromCenter(self, s, l, r):
    while l > -1 and r < len(s) and s[l] == s[r]:
        l -= 1
        r += 1

    if self.maxlen < r - l - 1: # right - left - 1 => size of the current string
        self.maxlen = r - 1 - l #right - left - 1
        self.start = l + 1
```



> Zig Zag

`set-up`: reading strings in a zig-zag pattern

`intuition`: 

- init. a list, and put in a letter into it's respective index

`example`:

```
s = "PAYPALISHIRING"
numRows = 4
return "PINALSIGYAHRPI"

P     I    N	0
A   L S  I G	1
Y A   H R		2
P     I			3
```

`code`:

```python
rows = [""]
index = 0
down = True #going up or down index of rows

#base case
if (s == ""): return s
if (numRows == 1): return s

#init. rows array with proper length
for i in range(numRows - 1):
    rows.append("")

#main
for i in range(len(s)):
    print(index)
    rows[index] += s[i]
    
    #is going down => needs to go up
    if(down and index % numRows == numRows - 1):
        down = False
	#is going up => needs to go down
    if(not down and index % numRows == 0):
        down = True
	#change index
    if(down):
        index += 1
     else:
        index -= 1

#build string
answer = ""
for i in range(numRows):
    answer += rows[i]
        
return answer
```

