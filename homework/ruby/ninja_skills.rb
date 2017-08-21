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























