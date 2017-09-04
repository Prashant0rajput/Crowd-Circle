class CreateChatrooms < ActiveRecord::Migration[5.0]
  def change
    create_table :chatrooms do |t|
      t.string :title
      t.boolean :direct_messages, default: false
      t.references :user, foreign_key: true
 
      t.timestamps
    end
  end
end
