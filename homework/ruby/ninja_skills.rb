# 1.
a = (2 + 2 == 4)
b = (2 + 2 == 3)

puts a == b
puts a != b


# 2.
cats = nil
puts cats
puts "#{cats} was here."
print cats
puts cats.class


# 3.
d = 10
puts d

e = 10.5
puts e

d = e   
puts d


# 4.
christine = "Hi, I'm Christine"
likesTo = "long walks on the beach, kinda."
puts "#{christine} and I like #{likesTo}"

g = "2"
gToNumber = 2
puts g + gToNumber.to_s
puts g.to_i + gToNumber


# 5.
puts "What is your favorite number?"
number = gets.chomp.to_i
puts "Your fav times 2 = #{number * 2}"

puts "What's your name?"
name = gets.chomp
puts "Hi #{name}! What do you like to do?"
like = gets.chomp
puts "#{name} likes to #{like}."


#6.
my_first_array = []
my_first_array = ["alpha", "bravo", "charlie", "delta", "echo", 1, 2, 3, 4]

puts my_first_array.last
puts my_first_array.first
puts my_first_array[1] = "Joe"
puts my_first_array[2] = 3
puts my_first_array.push(true)
puts my_first_array[3].class

#check
puts my_first_array.to_s


# 7.
my_favorite_animals = {
    Emma: 'Cat',
    Pascoe: 'Dog',
    Edgar: 'Donkey',
    Orion: 'Fish',
    Simba: 'Lion'
}
puts my_favorite_animals
my_favorite_animals[:Edgar] = 'Bear'
puts my_favorite_animals

my_favorite_movie = {}
my_favorite_movie[:scifi] = 'Star Wars'
puts my_favorite_movie


# 8.
first_range = (1..10)
print first_range.to_a

second_range = (1...1000)
print second_range.to_a

for number in first_range do
    print number.to_s
end

x = 0
while x < 50 do
    print "#{second_range}"
    x += 1
end
# I know this one's not right. I can't figure it out.

new_array =[]
first_range.each do |number|
    number2 = number * 2
    new_array << number2
end
print new_array

new_range = first_range.map do |num|
    if num % 2 == 0
        num.to_s
    else num % 2 != 0
        num
    end
end
print new_range

























