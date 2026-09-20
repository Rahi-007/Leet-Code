using System;

class Program
{
    static void Main(string[] args)
    {
        int num = 1236;
        Program program = new Program();
        int result = program.Reverse(num);
        Console.WriteLine($"Reverse {num} = {result}");
    }
    public int Reverse(int x)
    {
        int reverseNum = 0;
        while (x != 0)
        {
            int lastDigit = x % 10;
            x /= 10;

            if (reverseNum > int.MaxValue / 10 ||
                (reverseNum == int.MaxValue / 10 && lastDigit > 7))
            {
                return 0;
            }

            if (reverseNum < int.MinValue / 10 ||
                (reverseNum == int.MinValue / 10 && lastDigit < -8))
            {
                return 0;
            }

            reverseNum = reverseNum * 10 + lastDigit;
        }

        return reverseNum;
    }
}