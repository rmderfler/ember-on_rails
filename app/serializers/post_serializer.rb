class PostSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :title, :body, :user_id

  has_many :comments

  #url :post
end
