# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
5.times do |n|
	title = Faker::Book.title
	image = Faker::Placeholdit.image("850x500", 'jpeg', 'aaaaaa', '000')
	content = "<i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur tempora voluptates</i> <h2>First Subtitle</h2> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis odio inventore recusandae, placeat soluta perferendis dignissimos nesciunt et nostrum eaque tempora sapiente labore ea voluptatem, maxime hic quo adipisci quidem.</p> <p>Nihil obcaecati minima aliquid eaque amet odit provident fugiat veniam delectus, commodi, nisi veritatis aut odio modi, totam error fugit neque laboriosam soluta illum. Nostrum iure tempora, nisi fugit reiciendis.</p> <h2>Second Subtitle</h2> <p>Enim molestias esse architecto aperiam temporibus pariatur aliquid, tempora, iusto illum voluptate omnis voluptatibus quibusdam debitis accusantium repellendus quam. Debitis, eum perspiciatis doloremque ea repellendus aliquam optio, vero a dolor.</p> <p>Cum dolor, obcaecati tempore numquam iste saepe aut tempora. Quasi fugiat sunt odit ratione, commodi voluptate nesciunt error reiciendis nihil voluptatibus repellat ex ut doloremque, consectetur qui ipsum quia culpa?</p>"
	Article.create!(title: title,
							 image: image,
							 content: content)
end