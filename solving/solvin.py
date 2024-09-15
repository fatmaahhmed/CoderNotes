
class Solution(object):
    def gcdOfStrings(self, str1, str2):
        len1=len(str1)
        len2=len(str2)
        if len1==len2 and str1==str2:return str1
        else:
            if len1<len2:
                str2=str2.replace(str1,"")
                if str2=='':
                    return str1
                temp=str2
                str1=str1.replace(str2,"")
                if str2.find(str1)==-1:
                    return " "
                if str1=='' :
                    return temp
            else:
                str1=str1.replace(str2,"")
                if str1=='':
                    return str2
                str2=str2.replace(str1,"")
                temp=str1
                if str2=='':
                    return temp
            return " "

            


            
        

print(Solution().gcdOfStrings("TAUXXTAUXXTAUXXTAUXXTAUXX", "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"))
       