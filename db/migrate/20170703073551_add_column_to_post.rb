class AddColumnToPost < ActiveRecord::Migration
  def change
    add_column :posts, :video_meta, :string
  end
end
