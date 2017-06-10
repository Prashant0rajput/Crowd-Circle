class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :likes
      t.string  :content
      t.timestamps null: false
    end
  end
end
