using System;

class Program
{
    static void Main(string[] args)
    {
        int num = 12;
        Program program = new Program();
        int result = program.Reverse(num);
        Console.WriteLine($"Reverse {num} = {result}");
    }
    public int Reverse(int x)
    {
        return 0;
    }
}