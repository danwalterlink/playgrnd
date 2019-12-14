<# ways to do this:
  [] Push/Pop-Location to manage depth
  [] iterative function
  [] fileInfoObject / streamObject with jobcreation
  --- 
  learnings:
  [] how to check metadata in files
    - [System.IO.File].Checkout() - especially pdfs
  [] assemblyInformation?
#>

function flattenToBase {
  param (
    [string]$name,
    [string]$fileType,
    [string]$to,
    [string]$from = $PSCOMMANDPATH,
    [switch]$recursive
  )

  begin {
    # fileEndingConstructor -> construct filesearch glob pattern : if none presented, flatten whole structure
    # naive implementation of filetypesearch
    # send job for each distinct subfolder
    Get-ChildItem -Attributes Directory -Recurse `
    | Where-Object -FilterScript {
      Select-String -Pattern $name
      #constructing 
    }
  }

  # could be very easily implemented
  # mvmnt of move-item with filter
  process {
    # construct fileInfoObject 
  }
  
}