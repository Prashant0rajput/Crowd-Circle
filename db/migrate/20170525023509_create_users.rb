class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email
      t.string :profileImage
      t.float :lat
      t.float :long
      t.boolean :settings
      t.integer :followees
      t.integer :followers

      t.timestamps null: false
    end
  end
end
