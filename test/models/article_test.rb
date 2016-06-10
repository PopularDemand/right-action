require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  def setup
    @article = Article.new(title: "title", content: 'content')
  end

  test "should be valid article" do
    assert @article.valid?
  end

  test "title should be present" do
    @article.title = "  "
    assert_not @article.valid?
  end

  test "content should be present" do
    @article.content = ""
    assert_not @article.valid?
  end
end
