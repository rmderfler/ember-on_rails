class CommentSerializer < ActiveModel::Serializer
#   embed :ids, include: true
  attributes :id, :text
#   # url [:post, :comment]
end
