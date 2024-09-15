class Solution(object):
    def mergeAlternately(self, word1, word2):
        result = ''
        if len(word1) <= len(word2):
            N = len(word1)
        else:
            N = len(word2)
        i = 0
        while i<N:
            result += word1[i] + word2[i]
            i += 1

        if len(word1) < len(word2):
            result += word2[i:len(word2)]
        else:
            result += word1[i:len(word1)]
        return result
# test code
# object from class
sol=Solution()
print (sol.mergeAlternately("cdf","cdf"))



            