class AddColToUsers < ActiveRecord::Migration
  def change
    add_column :users, :band, :integer
  end
end
