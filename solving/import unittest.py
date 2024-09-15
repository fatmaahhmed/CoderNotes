import unittest
from solvin import Solution

class TestSolution(unittest.TestCase):
    def setUp(self):
        self.solution = Solution()

    def test_merge_alternately_equal_length(self):
        self.assertEqual(self.solution.mergeAlternately("abc", "def"), "adbecf")

    def test_merge_alternately_word1_longer(self):
        self.assertEqual(self.solution.mergeAlternately("abcd", "ef"), "aebfcdd")

    def test_merge_alternately_word2_longer(self):
        self.assertEqual(self.solution.mergeAlternately("ab", "cdef"), "acbdef")

    def test_merge_alternately_empty_word1(self):
        self.assertEqual(self.solution.mergeAlternately("", "xyz"), "xyz")

    def test_merge_alternately_empty_word2(self):
        self.assertEqual(self.solution.mergeAlternately("abc", ""), "abc")

if __name__ == '__main__':
    unittest.main()