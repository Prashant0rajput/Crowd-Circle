class AddcoverImageToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :coverImage, :string
  end
end
