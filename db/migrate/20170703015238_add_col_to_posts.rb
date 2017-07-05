class AddColToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :lat, :double
    add_column :posts, :long, :double
  end
end
