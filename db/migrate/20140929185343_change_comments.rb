class ChangeComments < ActiveRecord::Migration
  def change
    remove_column :comments, :content
    add_column :comments, :text, :text
  end
end
